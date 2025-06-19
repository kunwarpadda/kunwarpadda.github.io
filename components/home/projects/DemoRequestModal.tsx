import { useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import styles from "./demorequestmodal.module.scss";

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	projectTitle: string;
}

export const DemoRequestModal = ({ isOpen, setIsOpen, projectTitle }: Props) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
		interest: ""
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		const emailBody = `Hi Kunwar,

I'm interested in seeing a demo of your "${projectTitle}" project.

Contact Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'N/A'}

Reason for Interest:
${formData.interest}

Additional Message:
${formData.message}

Best regards,
${formData.name}`;

		const subject = `Demo Request for ${projectTitle}`;
		const mailtoLink = `mailto:kunwarpadda46@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
		
		window.open(mailtoLink);
		setIsOpen(false);
		
		// Reset form
		setFormData({
			name: "",
			email: "",
			company: "",
			message: "",
			interest: ""
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.8, opacity: 0 }}
				transition={{ type: "spring", duration: 0.3 }}
				className={styles.modal}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.modalHeader}>
					<div className={styles.headerContent}>
						<AiOutlineMail className={styles.headerIcon} />
						<div>
							<h3>Request Demo</h3>
							<p>Request a demo for <span>{projectTitle}</span></p>
						</div>
					</div>
					<button 
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<MdClose />
					</button>
				</div>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label htmlFor="name">Full Name *</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							placeholder="Enter your full name"
						/>
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="email">Email Address *</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							placeholder="your.email@example.com"
						/>
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="company">Company/Organization</label>
						<input
							type="text"
							id="company"
							name="company"
							value={formData.company}
							onChange={handleChange}
							placeholder="Your company or organization (optional)"
						/>
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="interest">Why are you interested in this project? *</label>
						<select
							id="interest"
							name="interest"
							value={formData.interest}
							onChange={handleChange}
							required
						>
							<option value="">Select a reason...</option>
							<option value="Potential collaboration opportunity">Potential collaboration opportunity</option>
							<option value="Learning about the technology stack">Learning about the technology stack</option>
							<option value="Hiring/recruitment purposes">Hiring/recruitment purposes</option>
							<option value="Similar project inspiration">Similar project inspiration</option>
							<option value="Business partnership potential">Business partnership potential</option>
							<option value="Investment opportunity">Investment opportunity</option>
							<option value="Academic/research interest">Academic/research interest</option>
							<option value="Other">Other</option>
						</select>
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="message">Additional Message</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Any additional details you'd like to share..."
							rows={4}
						/>
					</div>

					<div className={styles.formActions}>
						<button
							type="button"
							className={styles.cancelBtn}
							onClick={() => setIsOpen(false)}
						>
							Cancel
						</button>
						<button
							type="submit"
							className={styles.submitBtn}
							disabled={!formData.name || !formData.email || !formData.interest}
						>
							<AiOutlineSend />
							Send Demo Request
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};
