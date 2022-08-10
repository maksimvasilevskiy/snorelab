//import React from 'react';
const { createElement, render, createRef } = wp.element;
import logo from '../images/logo.svg';
import { MobileMenu } from './MobileMenu';
import { navigationLinks } from '../helpers/variables';

const Header = () => {
	const menuElementRef = createRef();

	const handleMenuClick = e => {
		const menuBtn = e.target.closest('#m-menu__button');
		const menuEl = menuElementRef.current;

		if (!menuEl || !menuBtn) {
			return;
		}

		document.documentElement.classList.toggle('is-locked');
		menuBtn.classList.toggle('m-menu__button_close');
		menuEl.classList.toggle('m-menu_active');
	};

	return (
		<header className="header">
			<div className="header-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-6 col-lg-3">
							<div className="header__logo">
								<a className="logo" href="/">
									<img src={logo} alt="logo" />
								</a>
							</div>
						</div>
						<div className="col-6 col-lg-9">
							<nav className="navigation header__navigation">
								<ul className="d-none d-lg-flex header__navigation-list">
									{navigationLinks.map(({ text, link }) => {
										return (
											<li className="header__navigation-item" key={text}>
												<a href={link} className="link">
													{text}
												</a>
											</li>
										);
									})}
								</ul>
								<button
									id="m-menu__button"
									className="d-lg-none m-menu__button"
									onClick={evt => handleMenuClick(evt)}
									aria-label="menu button"
								>
									<span />
									<span />
									<span />
								</button>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<MobileMenu ref={menuElementRef} />
		</header>
	);
};

export default Header;
