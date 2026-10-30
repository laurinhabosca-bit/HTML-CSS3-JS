package com.example.agencia.repository;

import com.example.agencia.model.Agencia;
import org.springframework.data.jpa.repository.JpaRepository;

/*
Ao herdar JpaRepository ganhamos uma série de métodos como 
findAll(): todos os registros
findById(id): um registro pelo id
save(obj): insere ou atualiza
deleteById(id): apaga
count(), existsById(id), e outros
*/
// JpaRepository<T, ID> em que T = classe/tabela ID = PK da tabela
public interface AgenciaRepository extends JpaRepository<Agencia, Integer> {

    // Equivale a: SELECT * FROM Agencia WHERE nome_agencia = ?
    // em que '?' é o parâmetro nomeAgencia que passamos para o método
    Agencia findByNomeAgencia(String nomeAgencia);
}