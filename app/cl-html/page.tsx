export default function CoverLetter() {
  const letterContent = `
Xiangyi Li
Sep 30, 2023

[Employer's Name]
[Company Name]  

Dear [Employer's Name],

I'm applying for the 2024 summer software internship at [Company Name]. With a MSc and BEng in Computer Science, internships at Dolby Laboratories and Red Hat, and several personal projects, I've honed my software engineering skills including full-stack development, cloud native development, windows development, mobile development, and machine learning.

In addition to implementing features as a developer, I've also had experiences enhancing UI/UX designs, contributing to quality assurance and CI/CD, collaborating across departments to solve problems during my internships. 

Besides work, I also like to learn and explore technologies and ideas on my own. I attend conferences and hackathons when I could find the time, read updates in popular open-source projects, and watch tech twitter and YouTube like ThePrimeagen, Theo.gg, Fireship, and DHH. 

I'm eager to contribute my technical skills and innovative thinking to [Company Name]. Looking forward to discussing how I can add value to your projects. 

Sincerely,  
Xiangyi Li`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <pre className="whitespace-pre-line font-mono max-w-screen-md mx-auto">
        {letterContent}
      </pre>
    </div>
  );
}