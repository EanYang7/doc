/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  mathematical_modeling_algorithm_and_application: [
    {
      type: "category",
      label: "数学建模算法与应用",
      link: {
        slug: "/math/mathematical_modeling_algorithm_and_application",
        type: "generated-index",
        title: "目录",
        description: "每章及各小结",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "数学/数学建模算法与应用", // Generate sidebar slice from docs/tutorials/easy
        },
      ],
    },
  ],
  probability_and_statistics: [
    {
      type: "category",
      label: "概率论与数理统计",
      link: {
        slug: "/math/probability_and_statistics",
        type: "generated-index",
        title: "目录",
        description: "每章及各小结",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "数学/数学建模算法与应用", // Generate sidebar slice from docs/tutorials/easy
        },
      ],
    },
  ],
  // d2l0: [{ type: "category", label: "数学建模算法与应用",items:{type: "autogenerated",dirName: "数学建模算法与应用"} }],

  // But you can create a sidebar manually
  // /*
  // tutorialSidebar: [
  //   'intro',
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
  //  */
};

module.exports = sidebars;
