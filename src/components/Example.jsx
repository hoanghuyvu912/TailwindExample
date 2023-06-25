import React, { Fragment } from "react";
import "./Example.css";

export default function Example() {
  return (
    <Fragment>
      <section id="section_1">
        <button id="button_1">Button 1</button>
        <br />
        <button className=" border-solid border-2 h-[50px] w-[100px] rounded-3xl my-3 border-blue-400 bg-blue-400 transition-all duration-150 hover:bg-blue-800">
          Button 2
        </button>
      </section>

      <section id="section_2">
        <button id="button_3">Button 2</button>
        <button id="button_4">Button 2</button>
        <button id="button_5">Button 2</button>
        <button id="button_6">Button 2</button>
      </section>

      <section id="section_3">
        <button className=" border-solid border-2 h-[50px] w-[100px] rounded-3xl my-3 mx-3 border-white bg-red-700 transition-all duration-150 hover:bg-red-500">
          Button 2
        </button>
        <button className=" border-solid border-2 h-[50px] w-[100px] rounded-3xl my-3 mx-3 border-white bg-green-700 transition-all duration-150 hover:bg-green-500">
          Button 2
        </button>
        <button className=" border-solid border-2 h-[50px] w-[100px] rounded-3xl my-3 mx-3 border-white bg-blue-700 transition-all duration-150 hover:bg-blue-500">
          Button 2
        </button>
        <button className=" border-solid border-2 h-[50px] w-[100px] rounded-3xl my-3 mx-3 border-white bg-yellow-300 transition-all duration-150 hover:bg-yellow-500">
          Button 2
        </button>
      </section>

      <section id="section_4">
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
      </section>

      <section
        id="section_5"
        className="text-black text-md grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-blue-400 p-3 my-4"
      >
        <p className=" bg-white p-5 border-solid border-black border-[1px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
        <p className=" bg-white p-5 border-solid border-black border-[1px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
        <p className=" bg-white p-5 border-solid border-black border-[1px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
        <p className=" bg-white p-5 border-solid border-black border-[1px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          aliquid quisquam. Ipsa officia reprehenderit eum, culpa voluptates
          error, quia rerum necessitatibus dolore quaerat amet delectus.
          Eligendi consequatur hic magnam eaque.
        </p>
      </section>
    </Fragment>
  );
}
