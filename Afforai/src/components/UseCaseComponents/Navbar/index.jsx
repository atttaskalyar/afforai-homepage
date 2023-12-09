import PrimaryButton from "../../BaseComponents/Buttons/PrimaryButton";
import SecondaryButton from "../../BaseComponents/Buttons/SecondaryButton";
import Image from "../../BaseComponents/Images/Image";
import styles from "./style.module.css";

const Navbar = (isMobile) => {
  return (
    <>
      <div>
        <nav className={styles.navbarContainer}>
          <div className="flex flex-row items-center px-6 py-2 border rounded-none md:rounded-2xl">
            <div className="w-full flex justify-between items-center">
              <a
                className="flex flex-shrink-1 justify-content-start align-items-center me-0 py-0 navbar-brand gap-2"
                href="/"
              >
                <Image
                  src="/images/logo-new-violet.webp"
                  alt="Afforai Logo"
                  height="24px"
                  width="24px"
                />
                <div>Afforai</div>
              </a>
              <div className={styles.navbarLinksContainer}>
                <a className={styles.navbarLink} href="#">
                  <span className={styles.navbarLinkText}>Affiliate</span>
                </a>
                <a className={styles.navbarLink} href="">
                  <span className={styles.navbarLinkText}>Pricing</span>
                </a>
                <a className={styles.navbarLink} href="">
                  <span className={styles.navbarLinkText}>Testimonials</span>
                </a>
                <a className={styles.navbarLink} href="">
                  <span className={styles.navbarLinkText}>Help Center</span>
                </a>
              </div>
              <div className={styles.navbarButtonsContainer}>
                <SecondaryButton text={"Log In"} />
                <PrimaryButton text={"Try for free"} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
