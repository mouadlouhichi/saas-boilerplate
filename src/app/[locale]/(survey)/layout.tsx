import SiteHeader from "@/shared/Header/SiteHeader";
import Footer from "@/components/Footer";

interface LoginLayoutProps {
  children: React.ReactNode;
}
export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="min-h-screen bg-lightGreen-500 bg-lines-pattern bg-cover bg-no-repeat  dark:bg-neutral-900 dark:bg-dark-lines md:bg-[center_15rem]">
      <SiteHeader type="moderated" className=" col-span-2 shadow-sm" />
      <div className=" mx-auto mt-20 max-w-3xl text-center md:mt-8">
        <h2 className="px-4 text-3xl font-semibold">
          Help us match you to{" "}
          <span className="text-primary-500">the right therapist</span>
        </h2>
        <p className="mt-4 hidden text-neutral-500 dark:text-neutral-400 md:block">
          Please fill out this short questionnaire to provide some background
          information about you and the issues you&apos; d like to deal with in
          therapy. It would help us match you with the most suitable therapist
          for you. Your answers will also give this therapist a good starting
          point in getting to know you.
        </p>
      </div>

      <div
        className={`mx-auto min-h-[calc(100vh_-_80px)] max-w-2xl px-4  pt-6 sm:py-8 lg:pb-4`}
      >
        <div className="space-y-8">{children}</div>
      </div>
      <Footer className="bg-neutral-50 dark:bg-neutral-900" />
    </div>
  );
}
