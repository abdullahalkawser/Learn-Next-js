import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'abdullah' },
    { id: 2, name: 'abdullah' },
    { id: 3, name: 'abdullah' },
    { id: 4, name: 'abdullah' }
  ]);
}
