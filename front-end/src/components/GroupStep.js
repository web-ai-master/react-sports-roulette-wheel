import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import { GROUPS_API } from "../utils/api";

const GroupStep = ({ onSelectGroup, onHandleNext }) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios
            .get(GROUPS_API)
            .then((res) => {
                setGroups(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handelSelectGroup = (group) => {
        onHandleNext();
        onSelectGroup(group);
    };
    return (
        <Grid container spacing={3} className="content-center">
            {groups.map((group) => (
                <Grid item xs={3} className="text-center">
                    <img
                        key={group.id}
                        style={{
                            width: "200px",
                            height: "150px",
                            objectFit: "contain",
                        }}
                        className="p-1 cursor-pointer"
                        onClick={() => handelSelectGroup(group)}
                        src={group.image}
                        alt="groupImage"
                    />
                    <h3>{group.name}</h3>
                </Grid>
            ))}
        </Grid>
    );
};

export default GroupStep;
