import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({
    redirectPath = '/signin',
    isAllowed,
}) {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}
