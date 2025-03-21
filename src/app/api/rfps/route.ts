// This route exists for external teams to ingest RFPs (eg: DevHub)

import { NextResponse } from 'next/server';

import { rfps } from '@/data/rfps';

export function GET() {
  return NextResponse.json({ rfps: rfps.map(({ content, ...rfp }) => rfp) });
}
