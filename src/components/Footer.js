import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <footer className="py-6 px-16  font-light flex flex-col lg:flex-row justify-between items-center c-bg">
      <p className="text-white mb-6 lg:mb-0">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://cryptoguarantee.com"
          className="text-light-blue-500 hover:text-light-blue-700"
        >
          Cryptoguarantee
        </a>
      </p>

      <ul className="list-unstyled flex">
        <li className="mr-6">
          <Link
            className="text-white hover:text-[#f17674] font-medium block text-sm"
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="text-white hover:text-[#f17674] font-medium block text-sm"
            to="/user/payments"
          >
            payment
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="text-white hover:text-[#f17674] font-medium block text-sm"
            href="/user/withdrawals"
          >
            Withdrawals
          </Link>
        </li>
        <li>
          <Link
            className="text-white  hover:text-[#f17674] font-medium block text-sm"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </footer>
  )
}
