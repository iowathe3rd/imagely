import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Checkout from "@/components/shared/Checkout";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/data";
import { getUserById } from "@/lib/actions/user.actions";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-9 xl:grid-cols-3 rounded-xl">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className="w-full rounded-xl border-2 border-border bg-card p-8 shadow-xl lg:max-w-none"
            >
              <div className="flex items-center justify-center flex-col gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="p-20-semibold mt-2">{plan.name}</p>
                <p className="h1-semibold">${plan.price}</p>
                <p className="p-16-regular">{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9 my-4">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button variant="outline" className="w-full bg-cover">
                  Free Consumable
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
