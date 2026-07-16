const subject = "Let's connect about an opportunity";
const body = `Hi Kunwarbir,

I came across your portfolio and would like to connect about an opportunity with [company or team]. Are you available for a conversation?

Best,
[Your name]`;

export const contactMailto = `mailto:kunwarpadda46@gmail.com?subject=${encodeURIComponent(
	subject,
)}&body=${encodeURIComponent(body)}`;
