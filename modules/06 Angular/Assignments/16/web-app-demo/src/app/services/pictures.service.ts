import { Injectable } from '@angular/core';
import { Picture } from "../interfaces/picture";

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  data: Picture[];

  constructor() { 
    this.data = [
      { id: "id_0", src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=972&q=80" },
      { id: "id_1", src: "https://images.unsplash.com/photo-1530006261244-0ae043004358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
      { id: "id_2", src: "https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
      { id: "id_3", src: "https://images.unsplash.com/photo-1549408134-ef8b18ebf741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" },
      { id: "id_4", src: "https://images.unsplash.com/photo-1413745000559-46fdd2d81cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" },
      { id: "id_5", src: "https://images.unsplash.com/photo-1548033698-5ceb4f3dce02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=855&q=80" },
      { id: "id_6", src: "https://images.unsplash.com/photo-1538023753487-9c329a33fecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1062&q=80" },
      { id: "id_7", src: "https://images.unsplash.com/photo-1542371857-763c991f02ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
      { id: "id_8", src: "https://images.unsplash.com/photo-1464652149449-f3b8538144aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
      { id: "id_9", src: "https://images.unsplash.com/photo-1547607700-14bf9e038209?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
      { id: "id_10", src: "https://images.unsplash.com/photo-1513507421387-9d8e65dde479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1076&q=80" }
    ]
  }

  getData(): Picture[] {
    return this.data;
  }

}
