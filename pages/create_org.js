import { useEffect, useState } from "react";
import Head from "next/head";
import { XCircleIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { addOrganization, addOrgOwner, loginUser } from "../helper";
import { useRouter } from "next/router";
import { userState } from "../atoms/user";
import { useRecoilState } from "recoil";

const create_org = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isCreateOrg, setIsCreateOrg] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [orgWebsite, setOrgWebsite] = useState("");
  const [orgDesc, setOrgDesc] = useState("");
  const [orgLogo, setOrgLogo] = useState("");
  const [Owner, setOwner] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [ownerSkills, setOwnerSkills] = useState("");
  const router = useRouter();

  useEffect(() => {
    user && router.push("/");
  }, [user]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Head>
        <title>GLLOC || Create organization</title>
      </Head>
      <div className="">
        <div
          className={`shadow-base dark:shadow-none lg:hover:shadow-medium  lg:dark:hover:shadow-none rounded-2xl w-full max-w-[700px] mx-5 mt-10
          dark:bg-card relative animate-slide-down transition-all duration-300 ${
            !isCreateOrg ? "hidden" : ""
          }`}
        >
          <XCircleIcon
            className="absolute top-1 left-1 w-6 h-6 text-primary-text-light dark:text-secondary-text-dark cursor-pointer"
            onClick={() => setIsCreateOrg(false)}
          />
          <h1 className="border-b-2 border-secondary-text-light dark:border-secondary-text-dark p-2 text-center font-semibold uppercase text-xl text-base-text-light dark:text-primary-text-dark">
            Create Organization
          </h1>
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col items-center m-5 space-y-5">
              <h1 className="w-full text-center font-medium underline p-1 text-base-text-light  dark:text-primary-text-dark dark:bg-[#333333] rounded-2xl">
                Org info
              </h1>
              <input
                required
                className="border-2 border-primary-text-light dark:border-secondary-text-dark bg-transparent  w-[100%] rounded-2xl outline-none
              text-primary-text-light font-semibold  placeholder:text-secondary-text-light placeholder:dark:text-secondary-text-dark
               dark:text-primary-text-dark px-2 py-1"
                type="text"
                placeholder="enter your organization name.."
                onChange={(e) => setOrgName(e.target.value)}
              />
              <input
                required
                className="border-2 border-primary-text-light dark:border-secondary-text-dark bg-transparent  w-[100%] rounded-2xl outline-none
              text-primary-text-light font-semibold  placeholder:text-secondary-text-light placeholder:dark:text-secondary-text-dark
               dark:text-primary-text-dark px-2 py-1"
                type="text"
                placeholder="enter your organization website"
                onChange={(e) => setOrgWebsite(e.target.value)}
              />
              <input
                required
                className="border-2 border-primary-text-light dark:border-secondary-text-dark bg-transparent  w-[100%] rounded-2xl outline-none
              text-primary-text-light font-semibold  placeholder:text-secondary-text-light placeholder:dark:text-secondary-text-dark
               dark:text-primary-text-dark px-2 py-1"
                type="text"
                placeholder="enter your organization tagline..."
                onChange={(e) => setOrgDesc(e.target.value)}
              />
              <label
                htmlFor="orgLogo"
                className="flex items-center justify-center rounded-full font-medium p-2 w-[100%]
              dark:bg-[#333333] dark:text-primary-text-dark"
              >
                Choose your logo
                <PlusCircleIcon className="w-[20px] h-[20px] text-primary-text-dark ml-1 dark:text-secondary-text" />
              </label>
              <input
                required
                type="file"
                id="orgLogo"
                className="hidden"
                onChange={(e) => setOrgLogo(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col items-center space-y-5 m-5">
              <h1 className="w-full text-center font-medium underline p-1 text-base-text-light  dark:text-primary-text-dark dark:bg-[#333333] rounded-2xl">
                CEO Info
              </h1>
              <input
                required
                placeholder="name"
                className="border-2 border-primary-text-light dark:border-secondary-text-dark bg-transparent  w-[100%] rounded-2xl outline-none
    text-primary-text-light font-semibold  placeholder:text-secondary-text-light placeholder:dark:text-secondary-text-dark
     dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwner(e.target.value)}
              />
              <input
                required
                placeholder="email"
                className="border-2 border-primary-text-light dark:border-secondary-text-dark bg-transparent  w-[100%] rounded-2xl outline-none
    text-primary-text-light font-semibold  placeholder:text-secondary-text-light placeholder:dark:text-secondary-text-dark
     dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwnerEmail(e.target.value)}
              />
              <input
                required
                placeholder="mobile"
                className="border-2 border-primary-text-light dark:border-secondary-text-dark bg-transparent  w-[100%] rounded-2xl outline-none
    text-primary-text-light font-semibold  placeholder:text-secondary-text-light placeholder:dark:text-secondary-text-dark
     dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwnerMobile(e.target.value)}
              />
              <input
                required
                placeholder="skills"
                className="border-2 border-primary-text-light dark:border-secondary-text-dark bg-transparent  w-[100%] rounded-2xl outline-none
    text-primary-text-light font-semibold  placeholder:text-secondary-text-light placeholder:dark:text-secondary-text-dark
     dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwnerSkills(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-bg-btn p-1 py-2 rounded-b-xl w-full text-lg text-primary-text-light dark:text-base-text-dark font-medium"
            onClick={async () => {
              await addOrganization(
                orgName,
                orgWebsite,
                orgDesc,
                orgLogo,
                Owner,
                ownerEmail,
                ownerMobile,
                ownerSkills
              );
              setIsCreateOrg(false);
              setUser(await loginUser());
            }}
          >
            Create Organization
          </button>
        </div>
        <button
          className={`${
            isCreateOrg ? "hidden" : "inline-block"
          }  shadow-base dark:shadow-none lg:hover:shadow-medium  lg:dark:hover:shadow-none px-10 py-4 animate-slide-down rounded-2xl text-base-text-light dark:text-base-text-dark text-2xl font-semibold
        dark:bg-card transition-all duration-300`}
          onClick={() => setIsCreateOrg(true)}
        >
          Create Organization
        </button>
      </div>
    </div>
  );
};

export default create_org;
