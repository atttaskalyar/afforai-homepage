import PrimaryButton from "../../BaseComponents/Buttons/PrimaryButton";
import SecondaryButton from "../../BaseComponents/Buttons/SecondaryButton";
import Image from "../../BaseComponents/Images/Image";
import styles from "./style.module.css";
import { Links } from "./constants";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                {Links.map((link, index) => {
                  return (
                    <a className={styles.navbarLink} href="#" key={index}>
                      <span className={styles.navbarLinkText}>{link}</span>
                    </a>
                  );
                })}
              </div>
              <div className={styles.navbarButtonsContainer}>
                <SecondaryButton text={"Log In"} />
                <PrimaryButton text={"Try for free"} />
                <div
                  className={styles.navigationToggler}
                  onClick={() => setIsOpen(!isOpen)}
                >
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
          <div
            className="mobile"
            style={{
              display: isOpen ? "flex" : "none",
              flexDirection: "column",

              paddingLeft: "0.75rem",
            }}
          >
            {Links.map((link, index) => {
              return (
                <a
                  key={index}
                  style={{
                    marginLeft: "0.5rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <span className={styles.navbarLinkMobile}>{link}</span>
                </a>
              );
            })}
          </div>
        </nav>
        <div className={styles.navbarSpacer}></div>
      </div>
    </>
  );
};

export default Navbar;
