using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using concorrencia.domain;
using System;

namespace concorrencia.repository
{
    public class ConcorrenciaRepository : IConcorrenciaRepository
    {
        public readonly DataContext _dbContext;
        public ConcorrenciaRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Add<T>(T entity) where T : class
        {
            _dbContext.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _dbContext.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _dbContext.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return  (await _dbContext.SaveChangesAsync())  > 0; 
        }

        #region Região
        public async Task<Regiao[]> GetAllRegioes()
        {
            IQueryable<Regiao> query = _dbContext.Regioes;
            query = query.AsNoTracking()
                         .OrderByDescending(p => p.NomeRegiao);
            return await query.ToArrayAsync();
        }
        #endregion

        #region Bandeiras
        public async Task<Bandeira[]> GetAllBandeiras()
        {
            IQueryable<Bandeira> query = _dbContext.Bandeiras;
            query = query.AsNoTracking()
                         .OrderByDescending(p => p.NomeBandeira);
            return await query.ToArrayAsync();
        }
        #endregion

        #region Postos Preco Compra
        public async Task<PrecoCompra[]> GetAllPrecosCompra()
        {
            IQueryable<PrecoCompra> query = _dbContext.PrecoCompras;
            query = query.AsNoTracking();
            
            return await query.ToArrayAsync();
        }
        #endregion

        #region Preco Distribuidora
        public async Task<PrecoDistribuidora[]> GetAllPrecosDistribuidora()
        {
            IQueryable<PrecoDistribuidora> query = _dbContext.PrecoDistribuidoras;
            query = query.AsNoTracking();

            return await query.ToArrayAsync();
        }
        #endregion

        #region Postos
        public async Task<Posto[]> GetAllPostos()
        {
            IQueryable<Posto> query = _dbContext.Postos;
            query = query.AsNoTracking();

            return await query.ToArrayAsync();
        }
        #endregion

        #region Preco de Venda
        public async Task<PrecoVenda[]> GetAllPrecos()
        {
            IQueryable<PrecoVenda> query = _dbContext.PrecoVendas
                .Include(p => p.Posto)
                .Select( p => new PrecoVenda()
                         {
                             Id = p.Id,
                             Combustivel = p.Combustivel,
                             Posto = p.Posto,
                             PostoId = p.PostoId,
                             Pagamento = p.Pagamento,
                             Preco = p.Preco,
                             Data = p.Data,
                             Atual = p.Data.Date == DateTime.Now.Date ? "S":"N"
                         });
            query = query.AsNoTracking();

            return await query.ToArrayAsync();
        }

        private string AtualProvider(DateTime data){
            if(data.Date==new DateTime().Date){
                return 'S'.ToString();
            } else {
                 return 'N'.ToString();
            }
           
        }

        #endregion
        
        #region Financeiro
        public async Task<Financeiro[]> GetAllLucros()
        {
            IQueryable<Financeiro> query = _dbContext.Financeiros;
            query = query.AsNoTracking();

            return await query.ToArrayAsync();
        }
        #endregion
    }
}