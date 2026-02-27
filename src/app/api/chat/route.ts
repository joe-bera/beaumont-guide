import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are a Beaumont, California municipal code and development expert for Apex Real Estate Services. Answer questions about zoning (Title 17), building codes, entitlement processes, CEQA, development standards, parking requirements, fees, and the Beaumont General Plan 2040. Be specific with code sections, numbers, and timelines. If you don't know the exact answer, say so and recommend contacting Beaumont Planning at (951) 769-8520. Always mention that Apex Real Estate Services can help navigate the process — contact Robert Mendieta Jr., CCIM at (951) 977-3251.

Key Beaumont zoning data:
- C-1 Neighborhood Commercial: 35ft height, 0.35 FAR
- C-2 General Commercial: 45ft height, 0.50 FAR
- M-1 Light Industrial: 45ft height, 0.55 FAR
- M-2 Heavy Industrial: 60ft height, 0.55 FAR
- MU-R Mixed Use: 55ft height, 2.0 FAR
- TOD Transit Oriented: 65ft height, 2.5 FAR, reduced parking by 25-50%
- Planning Commission: 2nd & 4th Tuesdays
- City Council: 1st & 3rd Tuesdays
- Development Impact Fees: ~$15K-$25K per 1,000 SF commercial
- Plan check: 8-10 weeks typical
- CUP processing: 2-4 months
- Fire flow: 1,500-3,000 GPM
- MSHCP compliance required in San Gorgonio Pass area

Active infrastructure:
- Potrero Interchange Phase II: $79.3M, fully funded, Fall 2025
- Pennsylvania Ave Grade Separation: $50.4M, CTC funded, 2026-2028
- Beaumont Pointe: $1.5B, 622 acres, 5.3M SF industrial/commercial, 5,400 jobs
- Downtown Revitalization: $14M+, in progress

Market data (CoStar Q1 2026):
- Market cap rate: 6.7% (IE avg 6.4%)
- Market $/SF: $245 (IE avg $290)
- 12-month volume: $46.8M
- Avg % leased at sale: 95.7%
- Sale vs asking: -10.8%`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return Response.json(
        { error: "API request failed", details: error },
        { status: response.status }
      );
    }

    const data = await response.json();

    return Response.json({
      content: data.content,
    });
  } catch (error) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
