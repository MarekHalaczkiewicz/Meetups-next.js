//domain.com/new-meetup
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const router = useRouter();

  async function AddMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta name="description" content="Add your own meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetup;
