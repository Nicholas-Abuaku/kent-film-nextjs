import LatestScreeningCard from "./components/LatestScreeningCard";
import CardGridPaginated from "./components/CardGridPaginated";
import {
  Grid,
  useTheme,
  createTheme,
  Skeleton,
  Button,
  Typography,
} from "@mui/material";
import PayPalDonate from "./components/PayPalDonate";

interface LatestScreeningInfo {
  heading: string;
  img_Url: string;
  date: string;
  description: string;
  eventUrl: string;
}

const Home = async () => {
  const response = await fetch(
    "https://kentfilm.up.railway.app/api/featured-content"
  );
  const latestInfo: LatestScreeningInfo[] = await response.json();
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
            date={latestInfo[0].date}
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
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
