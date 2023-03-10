import { Login } from '../../pages';
import { useState, useEffect, PropsWithChildren } from 'react';
import { IUserContextType, useUserContext } from '../../providers';

/**
 * PROTECTS PAGES, IF USER IS NOT LOGGED IN, REDIRECTS TO LOGIN PAGE COMPONENT
 */
export default function WithAuth(props: PropsWithChildren): JSX.Element { // NOSONAR
    const { user, isAuthenticated }: IUserContextType = useUserContext();
    const [isMounted, setIsMounted] = useState<boolean | null>(null);

    const handleAuthentication = (): JSX.Element => {
        if (user && isAuthenticated) {
            return props.children as JSX.Element;
        } else {

            return <Login />;
        }
    };

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    return (
        isMounted ? (handleAuthentication()) : (<></>)
    );
}
