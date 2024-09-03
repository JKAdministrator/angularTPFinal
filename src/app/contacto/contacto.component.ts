import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      class="col-md-8 col-lg-6"
      [formGroup]="contactoForm"
      (submit)="handleSubmit()"
    >
      <fieldset class="bg-secondary text-white p-3">
        <div>
          <label for="nombre" class="form-label">Nombre (obligatorio)</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            formControlName="nombre"
            placeholder=""
            autocomplete="name"
          />
          <div class="alerta" [hidden]="nombre.valid || nombre.untouched">
            El nombre es requerido
          </div>
        </div>
        <div>
          <label for="motivo" class="form-label"
            >Motivo de contacto (obligatorio)</label
          >
          <textarea
            type="text"
            class="form-control"
            id="motivo"
            formControlName="motivo"
            placeholder="Detalle dle motivo por el cual necesita asistencia"
            autocomplete="additional-name"
          ></textarea>
          <div class="alerta" [hidden]="motivo.valid || motivo.untouched">
            El motivo de contacto es requerido
          </div>
        </div>
        <div>
          <label for="email" class="form-label">Email (obligatorio)</label>
          <input
            type="text"
            class="form-control"
            id="email"
            formControlName="email"
            placeholder="direccion de email para recibir la respuesta"
            autocomplete="email"
          />
          <div class="alerta" [hidden]="email.valid || email.untouched">
            El email es requerido
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-outline-warning my-2"
            [disabled]="contactoForm.invalid"
            [title]="
              contactoForm.invalid
                ? 'Debe especificar todos los campos obligatorios'
                : 'Enviar solicitud de contacto'
            "
          >
            ENVIAR
          </button>
        </div>
      </fieldset>
    </form>
  `,
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  constructor(private router: Router) {}
  contactoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    motivo: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  get nombre() {
    return this.contactoForm.get('nombre') as FormControl;
  }
  get motivo() {
    return this.contactoForm.get('motivo') as FormControl;
  }
  get email() {
    return this.contactoForm.get('email') as FormControl;
  }

  handleSubmit() {
    if (this.contactoForm.invalid) return;
    this.router.navigate(['/contactoRecibido']);
  }
}
