import clsx from "clsx";

import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx(`flex items-center justify-center`)}>
      <div className="flex gap-[20px]">
        <div
          className={clsx(
            `w-[200px] h-[200px] flex items-center justify-center`
          )}
        >
          First box
        </div>
        <div
          className={clsx(
            `w-[200px] h-[200px] flex items-center justify-center`
          )}
        >
          First box
        </div>
        <div
          className={clsx(
            `w-[200px] h-[200px] flex items-center justify-center`
          )}
        >
          First box
        </div>
      </div>
    </section>
  );
}
