import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
    return (
        <>
            <Seo title="Not found - Expense Manager" description="Page not found." />
            <div className="notFound">
                <h1 className="h1">404</h1>
                <p className="lead">That page does not exist.</p>
                <Link className="btnPrimary" to="/">Go home</Link>
            </div>
        </>
    )
}
