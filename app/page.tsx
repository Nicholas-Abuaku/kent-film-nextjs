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
import LatestScreeningCard2 from "./components/LatestScreeningCard2";

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
    "https://kentfilm2025-production.up.railway.app/api/featured-content",
    {  next: { tags: ["latest-screening"] }, cache: "default" }
  );
  const fetchEvents = await fetch(
    "https://kentfilm2025-production.up.railway.app/api/allscreenings",
    { next: { tags: ["all-events"] } }
  );

  const latestInfo: LatestScreeningInfo[] = await response.json();

  const allEvents: Event[] = await fetchEvents.json();
  // const eventsJson = await fetchEvents.json();
  // const allEvents: Event[] = eventsJson.map((event:any)=>({...event, date: new Date(event.date)}))

  let latestImage =
    "https://kentfilm2025-production.up.railway.app/storage/" +
    latestInfo[0].img_Url;

  const newDate = new Date(latestInfo[0].date);
  let hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  const amPM = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedTime = `${hours}: ${minutes < 10 ? '0' : ''} ${minutes} ${amPM}`
  console.log(formattedTime.replaceAll(" ", ""));
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
          marginBottom={4}
          marginTop={1}
       
        >
          {/* <LatestScreeningCard2
            title={latestInfo[0].heading}
            date={dateString}
            description={latestInfo[0].description}
            img={latestImage}
            url={
              "https://filmfreeway.com/RamsgateInternationalFilmFestival/tickets"
            }
            edit={false}
          /> */}
          <LatestScreeningCard title={latestInfo[0].heading} date={dateString} time={formattedTime} description={latestInfo[0].description} img={latestImage} edit={false} url=""/>
        </Grid>
        <Grid
          container
          spacing={1}
          direction={"row"}
          paddingTop={1}
          paddingBottom={10}
          marginBottom={3}
          paddingLeft={"3%"}
          sx={{
            backgroundColor: "#254D32",
            width: "100%",
            maxHeight: "723px",
            display: "flex",
            flexGrow: "1",
          }}
          minHeight={"47.61vh"}
        >
          <Grid item xs={12} width={"100%"}  >
            <Typography
              variant="h2"
              fontFamily={`${inter.style.fontFamily}`}
              sx={{
                
                // marginRight: "40px",
                marginBottom:'0',
                paddingBottom:'0',
                color: "white",
                "@media (max-width: 1024px)": {
                  fontSize: "2.5rem",
                },
              }}
            >
              What's On
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <CardGridPaginated response={allEvents} />
          </Grid>
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
