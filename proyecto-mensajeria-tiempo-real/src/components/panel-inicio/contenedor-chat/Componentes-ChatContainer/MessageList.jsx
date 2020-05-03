import React from 'react'
import { Button, List, ListItem, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#fafafa",
    paddingTop: 0,
    flex: 1,
    overflow: "auto"
  },
  btn: {
    margin: "0 auto"
  },
  item: {
    padding: "8px 16px",
    maxWidth: "80%"
  },
  userMsg: {
    backgroundColor: "#b9f6ca"
  },
  right: {
    justifyContent: "flex-end"
  }
}))

function MessageList() {
  const classes = useStyles();
  return (
    <> 
      <List className={classes.container}>
        <Button color="primary" fullWidth>Show Previous Message!</Button>
        <ListItem>
          <Paper className={classes.item}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est repudiandae beatae libero veritatis natus sapiente ipsa. Quibusdam, maiores similique aliquam, rerum asperiores atque possimus voluptatum ut eveniet, provident consequatur.
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
        </ListItem>
        <ListItem className={classes.right}>
          <Paper className={`${classes.item} ${classes.userMsg}`}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est repudiandae beatae libero veritatis natus sapiente ipsa. Quibusdam, maiores similique aliquam, rerum asperiores atque possimus voluptatum ut eveniet, provident consequatur.
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
        </ListItem>
        <ListItem>
          <Paper className={classes.item}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est repudiandae beatae libero veritatis natus sapiente ipsa. Quibusdam, maiores similique aliquam, rerum asperiores atque possimus voluptatum ut eveniet, provident consequatur.
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
        </ListItem>
        <ListItem className={classes.right}>
          <Paper className={`${classes.item} ${classes.userMsg}`}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est repudiandae beatae libero veritatis natus sapiente ipsa. Quibusdam, maiores similique aliquam, rerum asperiores atque possimus voluptatum ut eveniet, provident consequatur.
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
        </ListItem>
        <ListItem>
          <Paper className={classes.item}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est repudiandae beatae libero veritatis natus sapiente ipsa. Quibusdam, maiores similique aliquam, rerum asperiores atque possimus voluptatum ut eveniet, provident consequatur.
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
        </ListItem>
        <ListItem className={classes.right}>
          <Paper className={`${classes.item} ${classes.userMsg}`}>
            <Typography 
              variant="body1" 
              color="textPrimary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum est repudiandae beatae libero veritatis natus sapiente ipsa. Quibusdam, maiores similique aliquam, rerum asperiores atque possimus voluptatum ut eveniet, provident consequatur.
            </Typography>
            <Typography 
              variant="caption"
              color="textSecondary" 
              display="block"
              align="right"
            >
              12:00
            </Typography>
          </Paper>
        </ListItem>
      </List>
    </>
  )
}

export default MessageList
