//import React, { useRef } from 'react';
const { createElement, render, useRef } = wp.element;
import { CareersPage } from '../components/CareersPage';
import { backdrop } from "backdropjs";

export const Careers = () => {
	const blockerRef = useRef(null);
	backdrop(document.documentElement.outerHTML, document.getElementById('careers-form-modal'), 20, "yes");
	return (
		<main className="careers">
			<CareersPage ref={blockerRef} />
			<div id="careers-form-modal" className="blocker" style="display: block !important;" ref={blockerRef}>
			</div>
		</main>
	);
};
