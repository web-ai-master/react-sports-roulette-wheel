import React, { useState, useEffect } from "react";
import axios from "axios";
import { GROUPS_API } from "../utils/api";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

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
        <div>
            <h2>Select a Group</h2>
            <ImageList>
                {
                    groups.map((group) => (
                        <ImageListItem key={group.id}>
                            <img
                                key={group.id}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    padding: "10px",
                                    marginRight: "10px",
                                    cursor: "pointer",
                                }}
                                onClick={() => handelSelectGroup(group)}
                                src={group.image}
                                alt="groupImage"
                            />
                            <ImageListItemBar title={group.name} />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </div>
    );
};

export default GroupStep;
