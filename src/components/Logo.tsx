import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className="logo">
      <Link to={'/'}>
        <img src="img/logo.webp" alt="" />
        <span className="logo_text"> used-cars </span>
      </Link>
    </div>
  )
}