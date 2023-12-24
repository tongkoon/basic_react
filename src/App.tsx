import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Container, styled } from "@mui/system";
import Header from "./assets/components/appbar/Appbar";
import picture1 from "./assets/photo.jpg";

export function App() {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "yello"
      // color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      // color: "#ff3d47",
      color: "yello"
    },
  });

  return (
    <>
      <Header />
      <div style={{backgroundColor:"black"}}>
      <Container fixed >
        <br />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={picture1} alt="" />
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{fontSize:'30px'}}>
              Daenerys Targaryen
            </Typography>
            <hr style={{ opacity: "25%" }} />
            <Typography variant="h4">Character</Typography>
            <Typography>Daenerys Targaryen is the daughter of King Aerys II Targaryen
              (also referred to as "The Mad King") and his sister-wife Queen
              Rhaella, and is one of the last survivors of House Targaryen.[6]
              She serves as the third-person point-of-view character of 31
              chapters of A Game of Thrones, A Clash of Kings, A Storm of
              Swords, and A Dance with Dragons.[7] This makes her the series'
              fourth most prominent narrative voice after Tyrion Lannister, Jon
              Snow and Arya Stark.</Typography>
            
          </Grid>

          <Grid item xs={5}>
            <iframe
            height={'100%'}
            width={'100%'}
              // width="540"
              // height="280"
              src="https://www.youtube.com/embed/Ydi80YrCnPY?si=HmsntOU6_k7KVaw9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowFullScreen
            ></iframe>
          </Grid>
          <Grid item xs={7} >
          <Typography variant="h5">Personality</Typography>
          <Typography>Daenerys is most often described as uncommonly beautiful, with
                long, pale silver-gold hair and purple eyes.[11] She is slender
                and pale, although taller than some of her female ancestors.
                Tales of Daenerys's beauty are numerous, and throughout the
                novels she encounters countless suitors who seek her hand in
                marriage, sometimes to gain control of her three dragons. She is
                fluent in the Common Tongue of Westeros, Dothraki, High Valyrian
                and bastard Valyrian, which she speaks with a Tyroshi
                accent.[12] Over the course of the first three novels she
                becomes fluent in the Dothraki language and Ghiscari, spoken in
                the slave cities in Essos.
                </Typography><br />
            
          </Grid>
        </Grid>
        <hr style={{ opacity: "25%", marginTop: 20 }} />
        <p>Comment</p>
        <TextField
          fullWidth
          // label="What do you feel about this?"
          multiline
          InputProps={{
            style: {
              color: "white",
              border: "1px solid white",
              borderColor: "rgba(255, 255, 255, 0.25)",
            },
          }}
          rows={4}
          defaultValue="What do you feel about this?"
        />
        <div style={{ marginTop: 10 }}>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <StyledRating
                name="customized-color"
                defaultValue={0}
                getLabelText={(value: number) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={1}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={
                  <FavoriteBorderIcon
                    fontSize="inherit"
                    sx={{ color: "grey" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button variant="contained" style={{backgroundColor:'rgb(144, 202, 249)',color:"black"}}>SEND</Button>
            </Grid>
          </Grid>
        </div>
        
      </Container>
      </div>
    </>
  );
}
