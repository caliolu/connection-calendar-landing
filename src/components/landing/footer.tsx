export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-coral flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="font-bold text-foreground">
              Connection Calendar
            </span>
          </div>

          <p className="text-sm text-muted">
            Remember everyone. Forget nothing.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Connection Calendar. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
