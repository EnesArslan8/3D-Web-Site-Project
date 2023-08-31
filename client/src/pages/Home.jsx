import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute z-10"
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div
            className="flex-1 xl:justify-center justify-start flex flex-col gap-10"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="xl:text-[10rem] text-[6rem] xl:laoding-[11rem] loading-[7rem] font-black text-black">
                Let's <br className="xl:block hidden" />
                DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae odit nulla, porro, velit totam, aliquid sapiente
                nobis in laborum minus culpa maiores! Ex corrupti in molestias?
                Doloribus aperiam quo quia. <strong>Obcaecati aliquid </strong>
                quisquam, aperiam dicta ab placeat deserunt? Sed alias
                praesentium iste molestias aut, nesciunt consectetur perferendis
                nam eius. Fuga incidunt, iusto animi perspiciatis omnis labore
                dolorum veritatis autem consequuntur!
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyle='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
