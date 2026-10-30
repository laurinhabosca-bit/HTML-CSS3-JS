package com.example.agencia.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Espiao")
public class Espiao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_espiao")
    private Integer id;

    @Column(name = "nome_real")
    private String nomeReal;

    @Column(name = "nome_espiao")
    private String nomeEspiao;

    @Column(name = "descricao")
    private String descricao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn (name = "id_agencia", nullable = false)
    private Agencia agencia;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_missao")
    private Missao missao;

    public Integer getId() { return id; }
    public String getNomeReal() { return nomeReal; }
    public String getNomeEspiao() { return nomeEspiao; }
    public String getDescricao() { return descricao; }
    public Agencia getAgencia() { return agencia; }
    public Missao getMissao() { return missao;}
}