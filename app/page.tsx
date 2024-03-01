import CssBaseline from "@mui/material/CssBaseline";
import LatestScreeningCard from "./components/LatestScreeningCard";
import CardGridPaginated from "./components/CardGridPaginated";
import dynamic from "next/dynamic";
const MailingListDialog = dynamic(
  () => import("./components/MailingListDialog"),
  { ssr: false }
);
import {
  Grid,
  useTheme,
  createTheme,
  Skeleton,
  Button,
  Typography,
} from "@mui/material";
import PayPalDonate from "./components/PayPalDonate";
import { Metadata } from "next";
// import MailingListDialog from "./components/MailingListDialog";

interface LatestScreeningInfo {
  heading: string;
  img_Url: string;
  date: string;
  description: string;
  eventUrl: string;
}

const Home = async () => {
  const response = await fetch(
    "https://kentfilm.up.railway.app/api/featured-content",
    { cache: "no-cache" }
  );
  const latestInfo: LatestScreeningInfo[] = await response.json();
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
            img={latestInfo[0].img_Url}
            url={latestInfo[0].eventUrl}
            edit={false}
          />
        </Grid>
        <Grid item xs={12}>
          <CardGridPaginated />
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
