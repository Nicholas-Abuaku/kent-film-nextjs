import CssBaseline from "@mui/material/CssBaseline";
// import LatestScreeningCard from "./components/LatestScreeningCard";
const LatestScreeningCard = dynamic(
  () => import("./components/LatestScreeningCard")
);
// import CardGridPaginated from "./components/CardGridPaginated";
import dynamic from "next/dynamic";
const MailingListDialog = dynamic(
  () => import("./components/MailingListDialog"),
  { ssr: false }
);

const CardGridPaginated = dynamic(
  () => import("./components/CardGridPaginated"),
  { ssr: false }
);
import { Grid, Typography } from "@mui/material";
import PayPalDonate from "./components/PayPalDonate";

import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
interface LatestScreeningInfo {
  heading: string;
  img_Url: string;
  date: string;
  time: string;
  description: string;
  eventUrl: string;
}
interface Event {
  id: string;
  title: string;
  time: string;
  date: string;
  url?: string;
  image?: string;
  description: string;
}
const Home = async () => {
  const response = await fetch(
    "https://picayune-belief-production.up.railway.app/api/featured-content",
    { next: { revalidate: 21600 } }
  );
  const fetchEvents = await fetch(
    "https://picayune-belief-production.up.railway.app/api/events",
    { next: { revalidate: 0 } }
  );

  const latestInfo: LatestScreeningInfo[] = await response.json();
  const allEvents: Event[] = await fetchEvents.json();

  let latestImage =
    "https://picayune-belief-production.up.railway.app/storage/" +
    latestInfo[0].img_Url;

  const newDate = new Date(latestInfo[0].date);
  const dateString = newDate.toDateString();
  return (
    <main>
      <Grid
        container
        spacing={0}
        direction={"row"}
        marginTop={0}
        paddingLeft={0}
        paddingRight={0}
        marginRight={0}
      >
        <Grid
          item
          md={12}
          xs={12}
          container
          direction={"column"}
          marginBottom={6}
          marginTop={0}
        >
          <LatestScreeningCard
            title={latestInfo[0].heading}
            date={dateString}
            description={latestInfo[0].description}
            img={latestImage}
            url={"/"}
            edit={false}
          />
        </Grid>
        <Grid
          container
          spacing={1}
          direction={"row"}
          paddingTop={3}
          paddingBottom={3}
          marginBottom={3}
          paddingLeft={"3%"}
          sx={{
            backgroundColor: "#339465",
            width: "100%",
            maxHeight: "723px",
            display: "flex",
            flexGrow: "1",
          }}
          minHeight={"47.61vh"}
        >
          <Grid item xs={12} width={"100%"}>
            <Typography
              variant="h2"
              fontFamily={`${inter.style.fontFamily}`}
              sx={{
                border: "2px solid",
                borderLeft: "0px",
                borderRight: "0px",
                marginRight: "40px",
                color: "white",
                "@media (max-width: 1024px)": {
                  fontSize: "2.5rem",
                },
              }}
            >
              What's On
            </Typography>
          </Grid>
          <CardGridPaginated response={allEvents} />
        </Grid>
        <Grid item xs={12}>
          <PayPalDonate />

          <MailingListDialog />
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
