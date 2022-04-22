import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import { XLink } from "../../../../x-lib/x-components/x-customLink/XLink";
function Navbar() {
    //const { loggedIn, user } = useAuth();
    //const { items } = useBasket();

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <XLink to="/">eCommerce</XLink>
                </div>

                <ul className={styles.menu}>
                    <li>
                        <XLink to="/">Products</XLink>
                    </li>
                </ul>

				<ul className={styles.menu}>
                    <li>
                        <XLink to="/users">Users</XLink>
                    </li>
                </ul>
            </div>

            <div className={styles.right}>
                <Link to="/signin">
                    <Button colorScheme="pink">Login</Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme="pink">Register</Button>
                </Link>
                {/* {!loggedIn && (
					<>
						<Link to="/signin">
							<Button colorScheme="pink">Login</Button>
						</Link>
						<Link to="/signup">
							<Button colorScheme="pink">Register</Button>
						</Link>
					</>
				)}

			 {loggedIn && (
					<>
						{items.length > 0 && (
							<Link to="/basket">
								<Button colorScheme="pink" variant="outline">
									Basket ({items.length})
								</Button>
							</Link>
						)}

						{user?.role === "admin" && (
							<Link to="/admin">
								<Button colorScheme="pink" variant="ghost">
									Admin
								</Button>
							</Link>
						)} 

						<Link to="/profile">
							 <Button>Profile</Button> 
						</Link>
					</>
				)} */}
            </div>
        </nav>
    );
}

export default Navbar;
