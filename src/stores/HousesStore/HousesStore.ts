import { Meta } from "../../utils/meta";
import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";

import { Houses } from "./types";


const API_ROUTES = "https://www.anapioficeandfire.com/api/houses";

type PrivateFields =
  | "_houses"
  | "_meta"

export default class HousesStore {
  private _houses: Houses[] = [];
  private _meta: Meta = Meta.INITIAL;

  constructor() {
    makeObservable<HousesStore, PrivateFields>(this, {
      _houses: observable,
      _meta: observable,
      houses: computed,
      meta: computed,
      getHousesList: action,
    });
  }

  get houses(): Houses[] {
    return this._houses;
  }

  get meta(): Meta {
    return this._meta;
  }

  async getHousesList(): Promise<void> {
    this._meta = Meta.LOADING;
      axios
        .get(API_ROUTES)
        .then((response) => {
          this._meta = Meta.SUCCESS;
          this._houses = response.data;
        })
        .catch(() => {
          this._meta = Meta.ERROR;
        });
    } 
}
