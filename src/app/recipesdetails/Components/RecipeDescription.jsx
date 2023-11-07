import React from "react";
import Pic from "../Assets/Pic.png";
import Image from "next/image";

export default function RecipeDescription() {
  return (
    <div className=" px-[15%] pt-20 font-montserrat ">
      <h1 className=" font-sacramento text-[3.7rem] py-4 text-center ">Crumdelite Cookies</h1>
      <section>
        <Image src={Pic} className=" w-full" alt="Cream" />
      </section>

      <section className=" flex flex-col py-6 gap-4 text-[#020E01] text-[1.2rem] xxl:text-[1.3rem] leading-[150%] font-quicksand tracking-[0.06px] ">
        <div>
          <h2 className=" text-[1.8rem] font-semibold py-3 ">Flavor Explosion</h2>
          <p>
            Our Nutty and Hearty Bread is a delectable fusion of flavors and
            textures. Packed with a medley of wholesome nuts, seeds, and whole
            grains, this bread offers a satisfyingly robust experience with
            every bite.
          </p>
          <p className="pt-4">
            The combination of toasted almonds, walnuts, and sunflower seeds
            creates a rich, nutty profile that's both earthy and slightly sweet.
            The hearty whole grains provide a sturdy foundation, delivering a
            delightful chewiness that complements the crunch of the nuts.
          </p>
        </div>
        <div>
          <h2 className=" text-[1.8rem] font-semibold py-3 ">Nutrient Powerhouse</h2>
          <p>
            Our Nutty and Hearty Bread isn't just about taste; it's a
            nutrition-packed powerhouse. Almonds and walnuts are excellent
            sources of healthy fats and protein, while sunflower seeds add a
            dose of essential vitamins and minerals. Whole grains contribute
            dietary fiber for digestive health.
          </p>
          <ul className="pt-4 list-disc list-inside">
            <li>No artificial additives or preservatives</li>
            <li>A healthy option for a balanced lifestyle</li>
            <li>No artificial additives or preservatives</li>
            <li>Baked to Perfection</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-[1.8rem] font-semibold py-3 ">Artisanal Quality</h2>
          <p>
            Discover the delightful world of Nutty and Hearty Bread, where
            flavor, nutrition, and versatility come together to create an
            exceptional culinary experience. Indulge in the richness of this
            bread, knowing you're making a nutritious choice that satisfies both
            your taste buds and your well-being.
          </p>
          <p className="pt-4">
            Whether toasted and spread with creamy avocado or served as a side
            with hearty soups and stews, this bread adds a touch of luxury to
            any meal. Its versatility means you can enjoy it for breakfast,
            lunch, or dinner.
          </p>
        </div>
        <div></div>
      </section>
    </div>
  );
}
