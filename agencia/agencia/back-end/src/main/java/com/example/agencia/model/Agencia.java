package com.example.agencia.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Agencia")
public class Agencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_agencia")
    private Integer id;

    @Column(name = "nome_agencia")
    private String nomeAgencia;

    public Integer getId() { return id; }
    public String getNomeAgencia() { return nomeAgencia; }
}