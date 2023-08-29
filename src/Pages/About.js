import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          accusantium officiis nemo animi in mollitia placeat inventore
          perspiciatis. Ratione adipisci quasi quas maxime recusandae molestiae
          quia temporibus? Sed est eaque illo, distinctio deleniti eos animi
          necessitatibus, labore fuga vitae tempora aliquid eius enim esse ipsum
          aliquam facilis porro quos accusantium, repellat modi. Maxime
          asperiores, quo laborum sed aperiam placeat non illum totam minima!
          Repudiandae possimus, ab perspiciatis, eius doloribus, ducimus maiores
          omnis corporis minus provident deserunt inventore eligendi dolores!
          Eveniet provident eum culpa fugiat assumenda, reprehenderit commodi
          ipsa. Et excepturi quibusdam adipisci doloribus ducimus aut laudantium
          repudiandae omnis totam libero error, tempora sapiente ullam modi!
          Dignissimos, animi corrupti. Velit neque dolorum iste soluta quaerat
          voluptate aliquid eum perspiciatis ea qui blanditiis sint dolorem
          maiores molestias pariatur ratione numquam nulla odio ullam similique,
          minus deserunt iusto, esse saepe? Dolorem amet, rerum reprehenderit
          maxime voluptates, tenetur dignissimos eos, voluptas in dicta est
          aliquid! Laudantium temporibus assumenda in eveniet ut, corrupti
          dolorem? Error quo delectus quos neque dolorum, mollitia praesentium
          ratione deleniti quisquam eos voluptatem officia odit similique
          consequatur debitis velit minus sapiente libero corrupti excepturi
          quidem tenetur porro qui incidunt! Autem temporibus voluptatibus
          porro. Nam similique aperiam molestias! Itaque totam amet rerum?
        </p>
      </div>
    </div>
  );
}

export default About;
