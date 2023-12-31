import { groq } from "next-sanity";
import { readClient, writeClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResoucesParams {
  query: string;
  category: string;
  page: string;
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getResources = async (params: GetResoucesParams) => {
  const { query, category, page } = params;
  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
      downloadLink,
      "image": poster.asset->url,
      views,
      slug,
      category
      }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const writeMessage = async (data: any) => {
  try {
    const message = await writeClient.create({
      _type: "message",
      createdAt: new Date().toISOString(),
      ...data,
    });

    return message;
  } catch (error) {
    console.log(error);
  }
};

export const createUsers = async (data: any) => {
  try {
    const user = await writeClient.create({
      _type: "user",
      createdAt: new Date().toISOString(),
      ...data,
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
