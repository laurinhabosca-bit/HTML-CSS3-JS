package com.example.agencia.repository;

import com.example.agencia.model.Espiao;
import com.example.agencia.model.EspiaoResumo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface EspiaoRepository extends JpaRepository<Espiao, Integer> {
// Primeira consulta
    @Query(
        "SELECT e FROM Espiao e JOIN FETCH e.agencia a WHERE a.nomeAgencia = :nomeAgencia"
    )
    List<Espiao> buscarPorNomeAgencia(
        @Param("nomeAgencia") 
        String nomeAgencia
    );

    // Segunda consulta
    @Query(nativeQuery = true, value =
    "SELECT e.nome_espiao AS nomeEspiao, " +
    "       a.nome_agencia AS agencia, " +
    "       m.nome_missao AS missao " +
    "FROM Espiao e " +
    "JOIN Agencia a ON a.id_agencia = e.id_agencia " +
    "LEFT JOIN Missao m ON m.id_missao = e.id_missao " +
    "WHERE e.id_espiao = :idEspiao")
    EspiaoResumo buscarResumoPorId(
        @Param("idEspiao") 
        Integer idEspiao
    );
}