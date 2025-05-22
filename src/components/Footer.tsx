import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NOCKSCAN</h3>
            <p className="text-sm">
              Nockscan is a Block Explorer and Analytics Platform for Nockchain,
              a lightweight blockchain for heavyweight verifiable applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link href="/brand" className="hover:text-blue-500">Brand Assets</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-blue-500">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-500">Privacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/api" className="hover:text-blue-500">API Documentation</Link></li>
              <li><Link href="/knowledge" className="hover:text-blue-500">Knowledge Base</Link></li>
              <li><Link href="/status" className="hover:text-blue-500">Network Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/zorp-corp/nockchain" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">Nockchain GitHub</a></li>
              <li><Link href="/validators" className="hover:text-blue-500">Validators</Link></li>
              <li><Link href="/stats" className="hover:text-blue-500">Blockchain Stats</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>© {new Date().getFullYear()} Nockscan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 