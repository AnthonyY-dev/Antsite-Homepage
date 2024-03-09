import { BackgroundBeams } from "@/components/ui/Beams";
import { getCurrentThemeString } from "@/hooks/theme-provider";
import React from "react";
import { CodeBlock, a11yLight, dracula } from "react-code-blocks";
import ProgrammerLangDark from "@/assets/plangArrowDark.png";
import ProgrammerLangLight from "@/assets/plangArrowLight.png";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  //DATE CALCULATION
  const present_date = new Date().getTime();
  const birthDate = new Date("04/14/2019").getTime();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysPerYear = 365.25;
  const millisecondsPerYear = daysPerYear * millisecondsPerDay;
  const timeSince9thBdayInMilliseconds = present_date - birthDate;
  const ageInYears = Math.floor(
    timeSince9thBdayInMilliseconds / millisecondsPerYear
  );
  const remainderMilliseconds =
    timeSince9thBdayInMilliseconds % millisecondsPerYear;
  const days = Math.floor(remainderMilliseconds / millisecondsPerDay);
  function calculateAge(birthDateString: string) {
    // Parse the birthdate string assuming "MM DD YYYY" format
    const [month, day, year] = birthDateString.split(" ");
    const birthDate = new Date(`${month}/${day}/${year}`);

    // Get the current date
    const currentDate = new Date();

    // Calculate age in years
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Adjust if the current date is before the birth date
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
  //Langs
  const languages = [
    { languageName: "Javascript", icon: "iconURL" },
    { languageName: "Typescript", icon: "iconURL" },
    { languageName: "Python", icon: "iconURL" },
    { languageName: "HTML", icon: "iconURL" },
    { languageName: "CSS", icon: "iconURL" },
  ];
  //General
  const theme = getCurrentThemeString();

  const codeBlockText = `const createAnthony = asnyc () => {
    const name = "Anthony Y";
    const birthday = 'April 14, 2010';
    const languagesKnown = [${languages
      .map(
        (lang) =>
          '"' +
          lang.languageName.charAt(0).toUpperCase() +
          lang.languageName.slice(1)
      )
      .join('", ')}\"];
    const reasonToStartCoding = \"Covid-19\"

    await makeHuman(name, birthday, languagesKnown, reasonToStartCoding)
  }
  createAnthony();`;

  return (
    <div style={{ position: "absolute", top: 0 }}>
      <header className="homepage-header">
        <Typewriter
          words={["Welcome to antsite.xyz", "Portfolio of Anthony Y"]}
          cursor
          cursorColor="#4287f5"
          loop={Infinity}
        ></Typewriter>
      </header>

      <BackgroundBeams></BackgroundBeams>
      <div className="section2homepage">
        <div className="section2homepagetext">
          <header className="s2hth">I am Anthony Y</header>

          <p className="tw-p-2 tw-text-xl">
            I started coding at the age of nine, which was{" "}
            <span className="tw-text-green-400">
              {ageInYears} years and {days} days ago
            </span>
            ! The reason I started coding is because{" "}
            <span className="tw-text-red-600">covid hit</span>, so I went and
            tried to make some programs in my first programming language,
            VBScript. I then got better at coding, and learnt a bit of
            Javascript. However, I thought it was useless because it didn't have
            a lot of libraries at the time. Instead, I learnt Python. Now, I am{" "}
            <span className="tw-text-blue-400">
              {calculateAge("04 14 2010")}
            </span>{" "}
            years old! I now know the languages below.
          </p>
        </div>
        <img
          src={theme == "dark" ? ProgrammerLangDark : ProgrammerLangLight}
          className="section2homepagemiddle"
        />
        <div className="section2homepagecode">
          <CodeBlock
            text={codeBlockText}
            language="ts"
            showLineNumbers={true}
            theme={theme == "dark" ? dracula : a11yLight}
          ></CodeBlock>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
