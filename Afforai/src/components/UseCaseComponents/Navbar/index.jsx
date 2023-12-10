import PrimaryButton from "../../BaseComponents/Buttons/PrimaryButton";
import SecondaryButton from "../../BaseComponents/Buttons/SecondaryButton";
import Image from "../../BaseComponents/Images/Image";
import styles from "./style.module.css";

const Navbar = (isMobile) => {
  return (
    <>
      <div>
        <nav className={styles.navbarContainer}>
          <div className={styles.navbarInnerContainer}>
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
                <div className={styles.navigationToggler}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ verticalAlign: "top" }}
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M96 256h320M96 176h320M96 336h320"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
