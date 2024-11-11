async cargar_tipo_eve(): Promise<void>{
  
    this.eventosService.gettipoeventos().pipe(
      tap(eventos => {
        // localLoading.dismiss();
        return eventos;
      })
    ).subscribe({
      next: async (respuesta: any) => {
      if (respuesta.estado == true) {
        this.titulos = [...respuesta.data];
        console.log(this.titulos);
      }else{
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Atencion',
          message: "No existen titulos registrados para el evento",
          buttons: [
            {
              text: 'Aceptar',
              handler: () => {
                console.log('OK');
              },
            },
          ],
        });
        await alert.present();
        console.log("No existen titulos registrados para el evento");
      }
      },
      error: async (error) => {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Atencion',
          message: "No se cargaron titulos para el evento",
          buttons: [
            {
              text: 'Aceptar',
              handler: () => {
                console.log('Confirm Okay');
              },
            },
          ],
        });
        await alert.present();
        console.log("No se cargaron titulos para el evento");
        
      },
      complete: () => {
        
      }
    } as Observer<any[]>);
  
    }