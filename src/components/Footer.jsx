function Footer() {
    return (
      <footer className="border-t border-green-900 bg-[#071A12] py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
  
          <h3 className="text-xl font-bold text-emerald-400">
            Izengo Maganga
          </h3>
  
          <p className="mt-2 text-sm text-slate-400">
            Aspiring Data Scientist
          </p>
  
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;
