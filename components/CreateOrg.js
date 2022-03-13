import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { addOrganization } from "../helper";

const CreateOrg = () => {
  const [isCreateOrg, setIsCreateOrg] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [orgWebsite, setOrgWebsite] = useState("");
  const [orgDesc, setOrgDesc] = useState("");
  const [orgLogo, setOrgLogo] = useState("");
  const [Owner, setOwner] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [ownerSkills, setOwnerSkills] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center h-[calc(100vh-53px)]">
        <div
          className={`shadow-base rounded-xl md:w-[700px] dark:bg-card relative animate-slide-down transition-all duration-300 ${
            !isCreateOrg ? "hidden" : ""
          }`}
        >
          <XCircleIcon
            className="absolute top-1 left-1 w-6 h-6 text-primary-text-light dark:text-secondary-text cursor-pointer"
            onClick={() => setIsCreateOrg(false)}
          />
          <h1 className="border-b-2 border-secondary-text-light p-2 text-center font-semibold uppercase text-xl text-base-text-light dark:text-base-text-dark dark:text-primary-text-dark">
            Create Organization
          </h1>
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col items-center m-5 space-y-5">
              <h1 className="w-full text-center font-medium underline p-1 text-base-text-light dark:text-base-text-dark dark:text-primary-text-dark dark:bg-gray-700">
                Org info
              </h1>
              <input
                required
                className="border-2 border-primary-text-light bg-transparent text-primary-text-dark w-[100%] rounded-xl outline-none
                text-primary-text-light font-semibold placeholder:font-light placeholder:text-secondary-text-light dark:text-primary-text-dark px-2 py-1"
                type="text"
                placeholder="enter your organization name.."
                onChange={(e) => setOrgName(e.target.value)}
              />
              <input
                required
                className="border-2 border-primary-text-light bg-transparent text-primary-text-dark w-[100%] rounded-xl outline-none text-primary-text-light font-semibold placeholder:font-light placeholder:text-secondary-text-light dark:text-primary-text-dark px-2 py-1"
                type="text"
                placeholder="enter your organization website"
                onChange={(e) => setOrgWebsite(e.target.value)}
              />
              <input
                required
                className="border-2 border-primary-text-light bg-transparent text-primary-text-dark w-[100%] rounded-xl outline-none text-primary-text-light font-semibold placeholder:font-light placeholder:text-secondary-text-light dark:text-primary-text-dark px-2 py-1"
                type="text"
                placeholder="enter your organization tagline..."
                onChange={(e) => setOrgDesc(e.target.value)}
              />
              <label
                htmlFor="orgLogo"
                className="flex items-center justify-center rounded-full font-medium shadow-base p-2 w-[100%]
                dark:bg-gray-700 dark:text-primary-text-dark"
              >
                Choose your logo
                <PlusCircleIcon className="w-[20px] h-[20px] text-gray-500 ml-1 dark:text-secondary-text" />
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
              <h1 className="w-full text-center font-medium underline p-1 text-base-text-light dark:text-base-text-dark dark:text-primary-text-dark dark:bg-gray-700">
                CEO Info
              </h1>
              <input
                required
                placeholder="name"
                className="border-2 border-primary-text-light bg-transparent text-primary-text-dark w-[100%] rounded-xl outline-none text-primary-text-light font-semibold placeholder:font-light placeholder:text-secondary-text-light dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwner(e.target.value)}
              />
              <input
                required
                placeholder="email"
                className="border-2 border-primary-text-light bg-transparent text-primary-text-dark w-[100%] rounded-xl outline-none text-primary-text-light font-semibold placeholder:font-light placeholder:text-secondary-text-light dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwnerEmail(e.target.value)}
              />
              <input
                required
                placeholder="mobile"
                className="border-2 border-primary-text-light bg-transparent text-primary-text-dark w-[100%] rounded-xl outline-none text-primary-text-light font-semibold placeholder:font-light placeholder:text-secondary-text-light dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwnerMobile(e.target.value)}
              />
              <input
                required
                placeholder="skills"
                className="border-2 border-primary-text-light bg-transparent text-primary-text-dark w-[100%] rounded-xl outline-none text-primary-text-light font-semibold placeholder:font-light placeholder:text-secondary-text-light dark:text-primary-text-dark px-2 py-1"
                type="text"
                onChange={(e) => setOwnerSkills(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-bg-btn p-2 w-full text-lg rounded-b-xl text-base-text-light dark:text-base-text-dark font-semibold"
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
            }}
          >
            Create Organization
          </button>
        </div>
        <button
          className={`${
            isCreateOrg ? "hidden" : "inline-block"
          }  shadow-base hover:shadow-medium dark:shadow-none dark:hover:shadow-none px-10 py-4 animate-slide-down rounded-xl text-base-text-light dark:text-base-text-dark text-2xl font-semibold
          dark:bg-card dark:text-primary-text-dark transition-all duration-300`}
          onClick={() => setIsCreateOrg(true)}
        >
          Create Organization
        </button>
      </div>
    </div>
  );
};

export default CreateOrg;
