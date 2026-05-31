function Footer() {
    return (
      <footer className="border-t border-green-900/50 bg-[#071A12] py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
  
          <h3 className="text-2xl font-bold text-emerald-400">
            Izengo Maganga
          </h3>
  
          <p className="mt-3 text-slate-400">
            Aspiring Data Scientist | EASTC Student
          </p>
  
          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;
