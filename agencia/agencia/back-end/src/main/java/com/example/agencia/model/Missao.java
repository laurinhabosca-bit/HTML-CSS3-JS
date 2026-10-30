package com.example.agencia.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Missao")
public class Missao {
    
    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id_missao")
    private Integer id;

    @Column(name = "nome_missao")
    private String nomeMissao;

    @Column(name = "descricao")
    private String descricao;

    public Integer getId() { return id; }
    public String getNomeMissao() { return nomeMissao; }
    public String getDescricao() { return descricao;}


}
