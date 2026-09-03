export type Severity = 'critical' | 'minor';

export interface ScanIssue {
  id: string;
  sev: Severity;
  title: string;
  body: string;
  howToFix?: string;
}

export interface ScanResult {
  url: string;
  finalUrl: string;
  scannedAt: string;
  issues: ScanIssue[];
  checksRun: string[];
  clean: boolean;
}
